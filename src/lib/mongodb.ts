import { MongoClient, ServerApiVersion } from "mongodb";

type MongoDBClientOptions = {
    serverApi: {
        version: ServerApiVersion;
        strict: boolean;
        deprecationErrors: boolean;
    };
};

const uri = process.env.MONGODB_URI!;
if (!uri) {
    throw new Error("MongoDB URI is not defined in environment variables.");
}

const clientOptions: MongoDBClientOptions = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

const client = new MongoClient(uri, clientOptions);

async function run(): Promise<void> {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. Successfully connected to MongoDB!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    } finally {
        await client.close();
    }
}

run().catch(console.error);
