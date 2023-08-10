import mongoose from "mongoose";

export async function connect(){
    try{
        await mongoose.connect('mongodb+srv://hero-ticket:IPhNAa0LG9x78JI5@hero-tickets.lmgw27j.mongodb.net/');
        console.log('Connect database success')
    }
    catch{

    }
}