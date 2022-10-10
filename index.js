 const contacts = require("./contacts")
 const yargs = require("yargs")
 const {hideBin} = require("yargs/helpers")

 const invokeAction = async({action, id, name, email, phone}) => {
     switch(action){
         case "list":
             const allContacts = await contacts.listContacts()
             console.log(allContacts)
             break
         case "get":
             const oneContacts = await contacts.getContactById(id)
             console.log(oneContacts)
             break
         case "add":
             const newContact = await contacts.addContact({ id, name, email, phone })
             console.log(newContact)
             break
         case "remove":
             const contactToRemove = await contacts.removeContact(id)
             console.log(contactToRemove)
             break
         default:
             console.warn("\x1B[31m Unknown action type!");
     }
 }

//  const actionIndex = process.argv.indexOf("--action")
//  if(actionIndex !== -1) {
//     const action = process.argv[actionIndex + 1] 
//     invokeAction({action})
//  }

 const arr = hideBin(process.argv)
 const {argv} = yargs(arr)
 invokeAction(argv) 
 
//  invokeAction({action: "list"})
//  invokeAction({action: "get", id: "1"})
 // invokeAction({action: "add",  
 //             name: "Boris Johnson", 
 //             email: "johnosuk@gmail.com", 
 //             phone: "095-32-12-234" 
 //         })  
  
 // invokeAction({action: "remove", id: "1"})
 
 