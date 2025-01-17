from model import Todo

#MongoDB driver
import motor.motor_asyncio


client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
database = client.TodoList
collection = database.todo

async def fetch_one_todo(title):
    document = await collection.find_one({"title":title})
    return document

async def fetch_all_todos():
    todos= []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos

async def create_todo(todo):
    document = todo
    await collection.insert_one(document)
    return document

async def update_todo(todo):
    await collection.update_one({"title":todo["title"]},{"$set":{"description":todo["description"]}})
    document = await collection.find_one({"title":todo["title"]})
    return document

async def remove_todo(title):
    await collection.delete_one({"title":title})
    return True