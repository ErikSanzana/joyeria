import prepareHateoas from "../../helpers/hateoas.js";
import pagination from "../../helpers/paginator.js";
import { dbFilterData, getDataFilter } from "../models/joyeriaModels.js";



export const getDBfilters = async (req, res, next) => {
    try {
      const filters = req.query;
      const result = await dbFilterData(filters);
      res.status(200).json({ result: result });
    } catch (error) {
      next(error);
    }
  };

export const getHATEOAS = async (req, res, next) => {
  try {
    const { limit, page, order_by } = req.query;
    const result = await getDataFilter(limit, page, order_by);
    const formatHATEOAS = await prepareHateoas("joyas", result);
    const paginatedFormatData = pagination(formatHATEOAS, limit, page);
    res.status(200).json(paginatedFormatData);
  } catch (error) {
    next(error);
  }
};

