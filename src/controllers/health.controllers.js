import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const healthChecker = asyncHandler( async ( req, res ) => {

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {},
            "Health is Good"
        )
    )

})

export { healthChecker }