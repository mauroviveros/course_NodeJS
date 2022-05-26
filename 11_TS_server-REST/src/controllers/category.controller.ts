
import { Request, Response } from "express";
import { Types } from "mongoose";
import Category from "../models/category.model";

export const getCategories = async (req: Request, res: Response)=>{
  let filter = { estado: true };
  let { limit, page } = Object.assign({}, {
      limit: 5,
      page: 1
  }, req.query);

  limit = Number(limit) > 0 ? Number(limit) : 0;
  page = Number(page) > 0 ? (Number(page) - 1) * limit : 0;

  const query = Category.find(filter);
  query.sort("name");
  query.limit(limit);
  query.skip(page);

  try{
      const total = await Category.count(filter);
      const categories = await query.exec();
      return res.json({ total, data: categories });
  } catch(error){
      console.log(error);
      return res.status(400).json(error);
  };
};

export const getCategory = async (req: Request, res: Response)=>{
  const _id = new Types.ObjectId(req.params._id);
  try{
      const category = await Category.find({_id: _id});
      return res.json({ data: category });
  } catch(error){
      console.log(error);
      return res.status(400).json(error);
  };
};