# Mongo Cheatsheet <!-- omit in toc --> 

## Contents <!-- omit in toc --> 
- [Startup Commands](#startup-commands)
- [Mongo Shell Commands](#mongo-shell-commands)
  - [Create](#create)
  - [View](#view)
  - [Update](#update)
  - [Delete](#delete)
## Startup Commands

If you want to... | The command is...
----------------- | --------------
start Mongo | `use sudo service mongodb start`
start a Mongo shell | `mongo`

[Back to top](#)


## Mongo Shell Commands

### Create
<img width=400/> If you want to... <img width=400/> | <img width=1200 /> The command is... <img width=1000 /> 
----------------- | --------------
create a new database | `use name-of-database`
create a user | `db.createUser({ 'user': 'name-of-user', 'pwd': 'mypassword1234', 'roles' : ["readWrite", "dbAdmin"]})`
create a new collection | `db.createCollection('name-of-collection')`
create a record | `db.name-of-collection.insert({ 'exampleKey' : 'exampleValue' })`
create multiple records | `db.name-of-collection.insert([{ 'exampleKey1' : 'exampleValue1' }, { 'exampleKey2' : 'exampleValue2' }])`

[Back to top](#)

### View
<img width=400/> If you want to... <img width=400/> | <img width=1200 /> The command is... <img width=1000 /> 
----------------- | --------------
view the databases | `show dbs`
view the database you are currently in | `db`
view collections | `show collections`
view all records within a collection | `db.name-of-collection.find()`
view filtered records within a collection | `db.name-of-collection.find({ 'exampleKey1' : 'exampleValue1' })`
view filtered records with more than one filter | `db.name-of-collection.find({$or: [{ 'exampleKey1' : 'exampleValue1' }, { 'exampleKey1' : 'exampleValue2'}]})`
view filtered records with a *less than* filter | `db.name-of-collection.find({ 'numberFieldKey' : { $lt: 100 }})`
view filtered records with a *less than or equal to* filter | `db.name-of-collection.find({ 'numberFieldKey' : { $lte: 100 }})`
view filtered records with a *greater than* filter | `db.name-of-collection.find({ 'numberFieldKey' : { $gt: 100 }})`
view filtered records with a *greater than or equal to* filter | `db.name-of-collection.find({ 'numberFieldKey' : { $gte: 100 }})`
view filtered records by a value nested in an object | `db.name-of-collection.find({ 'exampleKey1.nestedExampleKey1' : 'exampleValue1' })`
view filtered records by a value nested in an array *(will cycle through to find value)* | `db.name-of-collection.find({ 'exampleArrayKey1' : 'exampleValue1' })`
view pretty records | `db.name-of-collection.find().pretty()`
view sorted records (ascending) | `db.name-of-collection.find().sort({ 'exampleKey1: 1' })`
view sorted records (descending) | `db.name-of-collection.find().sort({ 'exampleKey1: -1' })`
view count *(can be combined with a find query)* | `db.name-of-collection.find().count()`
limit results of find *(can be combined with a find query)*| `db.name-of-collection.find().limit(10)`

[Back to top](#)
### Update
<img width=500/> If you want to... <img width=500/> | <img width=1000 /> The command is... <img width=1000 /> | <img width=800/> How does it work? <img width=800/>
-- | -- | --
update a record (replaces all keys and values) | `db.name-of-collection.update({ 'oldExampleKey1' : 'oldExampleValue1'}, { 'newExampleKey1' : 'newExampleValue2' })` | This will search for a record where `oldExampleKey1` matches `oldExampleValue1`.  Then, it will replace the entire contents of that record with a key of `newExampleKey1` and assign it a value of `newExampleValue2`.
update a record (insert/update keys and values without replacing all) | `db.name-of-collection.update({ 'exampleKey1' : 'exampleValue1' }, {$set: { 'exampleKey2' : 'exampleValue2' }})` | This will search for a record where `exampleKey1` matches `exampleValue1`.  Then, it will add/update (or *set*) a new key/value to the existing record without replacing the entire record.
update a record by incrementing a number *(in example by 1)*| `db.name-of-collection.update({ 'exampleKey1' : 'exampleValue1'}, {$inc: { 'numberFieldKey': 1 }})` | This assumes that there is a pre-existing field called `numberFieldKey`. This will search for a record where `exampleKey1` matches `exampleValue1`.  Then, it will increment whatever number is the value of the numberFieldKey by 1.
create a new record if update() doesn't find a match | `db.name-of-collection.update({ 'exampleKey1': 'exampleValue1'}, { 'exampleKey1': 'exampleValue1', 'exampleKey2': 'exampleValue2'}, {$upsert: true})` | This will search for a record where `exampleKey1` matches `exampleValue1`.  If it finds it, it will update that record (with the replace all method) with the details passed in as the 2nd parameter.  If it doesn't find it, we can insert a record with the details passed into the 2nd parameter, by setting the upsert option to `true`.
update the name of a key | `db.name-of-collection.update({ 'exampleKey1': 'exampleValue1'}, {$rename:{'exampleKey1' : 'exampleKey2'}})` | This will search for a record where `exampleKey1` matches `exampleValue1`.  It will then rename the key of `exampleKey1` to `exampleKey2`.

[Back to top](#)

### Delete
<img width=500/> If you want to... <img width=500/> | <img width=1000 /> The command is... <img width=1000 /> | <img width=800/> How does it work? <img width=800/>
----------------- | -------------- | -------------
delete an entire database | `db.dropDatabase()` | Brutally!
delete an entire collection | `db.name-of-collection.drop()` | Similar to dropping a table in MySQL.
delete a field in a record | `db.name-of-collection.update({ 'exampleKey1' : 'exampleValue1'}, {$unset: { 'exampleKey2' : ''}})` | This will search for a record where `exampleKey1` matches `exampleValue1`.  Then, it will remove the field with a key of `exampleKey2`. *NOTE: if the record `exampleKey2` did not exist, it would simply do nothing*
delete a record(s) | `db.name-of-collection.remove({ 'exampleKey1' : 'exampleValue1' })` | This will remove all records where `exampleKey1` matches `exampleValue1`.

[Back to top](#)