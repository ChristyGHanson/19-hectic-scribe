import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
// put is updating data in the db.
export const putDb = async (content) => {
  console.log("PUT to database");
  //  open the db - done
  // create the transaction - done
  // create the store - done 
  // create the request - done 
  // create the result - done
  // see line 23 in 10-PWA. The name of the database is jate, so this will be entered in the parens. include the version we want to use, which is 1 
  const jate = await openDB('jate', 1);
  // readwrite comes from idb
  // transaction
  const transaction = jate.transaction('jate', 'readwrite');
  // store - hold objects in memory
  const store = transaction.objectStore('jate');
  // request
  //  id and value in this object needed 
  const request = store.put({
    // id of the store is 1
    id: 1,
    value: content
  });
  // result - include in one line. Use asynchronous request here. 
  //  it waits for the db query which was store.put in the request var.
  const result = await request;
  //  visual signifier in console
  console.log('result: data was PUT to db', result);

};

// TODO: Add logic for a method that gets all the content from the database
//  get - get data from db
// uses a readonly
export const getDb = async () => {
  console.log("GET to database");
  const jate = await openDB('jate', 1);
  const transaction = jate.transaction('jate', 'readonly');
  const store = transaction.objectStore('jate');
  const request = store.getAll();
  // Get confirmation of the request.
  const result = await request;
  console.log('result: GET submitted successfully', result);
  return result?.value;
};

initdb();
