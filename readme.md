# Simple Node App for diagnosing connectivitiy issues with Azure App Service

Contains 2 routes 
- /tables - Tries to connect to a a storage account and access data in a table (Storage Key, Storage Name and Table name need to be defined in app settings)
- /ip - Gets the outbound IP used (uses httpbin.org/ip)