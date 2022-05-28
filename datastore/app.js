// Imports the Google Cloud client library
const { Datastore } = require('@google-cloud/datastore');

// Creates a client
const datastore = new Datastore({
  projectId: 'cogent-tempo-351103',
});

// [START datastore_add_entity]
async function addTask() {
  const taskKey = datastore.key('Task');
  const entity = {
    key: taskKey,
    data: [
      {
        name: 'created',
        value: new Date().toJSON(),
      },
      {
        name: 'description',
        value: 'some description',
        excludeFromIndexes: true,
      },
      {
        name: 'done',
        value: false,
      },
    ],
  };

  try {
    await datastore.save(entity);
    console.log(`Task ${taskKey.id} created successfully.`);
  } catch (err) {
    console.error('ERROR:', err);
  }
}
// [END datastore_add_entity]

addTask()