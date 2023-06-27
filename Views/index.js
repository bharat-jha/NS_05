// Creating API through mongoose for crud operations 

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/GSTN');

const GN_Mth_schemma = mongoose.Schema({
    name: String,
    brand: String,
    country: String,
    price: Number
});


// Creating the configuration of the product ................ CRUD(Create ops)

const saveInDb = async(req, res) => {

    const Gn_Mth_Model = mongoose.model('GN_Mth', GN_Mth_schemma);
    let Data = new Gn_Mth_Model({ name: "bharat", price: 4500, brand: 'Apple', country: 'India', price: 120000 });
    let results = await Data.save();
    console.log(results);
};

// saveInDb();


// Updating objects  Ops in the DB ................ CRUD(Update Ops)

const updateInDb = async(req, res) => {
    const Gn_Mth = mongoose.model('GN_Mth', GN_Mth_schemma);
    let data = await Gn_Mth.updateOne({ name: "bharat" }, { $set: { price: 45000, name: "Apple" } });
    console.log(data);
};

// updateInDb();

// Delete objects in database ................ CRUD(Delete Ops)

const deleteInDb = async(req, res) => {
    const Gn_Mth = mongoose.model('GN_Mth', GN_Mth_schemma);
    let data = await Gn_Mth.deleteOne({ name: "Apple" });
    console.log(data);
};

//deleteInDb();

// Reading the data from DB following ....CRUD(Read Ops)

const readInDb = async(req, res) => {
    const Gn_Mth = mongoose.model('GN_Mth', GN_Mth_schemma);
    let data = await Gn_Mth.find();
    console.log(data);

};

readInDb();

// All ops of CRUD are working fine now ....