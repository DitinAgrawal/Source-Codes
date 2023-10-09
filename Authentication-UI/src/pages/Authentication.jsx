import React from "react";
import Google_and_Github from "../components/Google_and_Github";
import Email_and_Password from "../components/Email_and_Password";

const Authentication = () => {

    return (
        <div className="">
            <div className="flex gap-24 m-auto h-screen items-center justify-center max-md:flex-col max-md:gap-8">
                {/* Email and Password */}
                <Email_and_Password />
                {/* Divider */}
                <div className="h-1/2 flex flex-col w-1 rounded-lg items-center justify-center bg-[#ddd] max-md:hidden"></div>
                <div className="hidden max-md:block">----- OR -----</div>
                {/* Google and Github */}
                <Google_and_Github />
            </div>
        </div>
    );
};

export default Authentication;
