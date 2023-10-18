/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useContext, useEffect, useState } from "react";
import API_BASE_URL from "@/config/api";
import { context } from "@/app/layout";

export default function MeasureProduct() {
    const contextValue: any = useContext(context);
    return (
        <>       {contextValue && <div className="xl:w-236 mt-8 hidden md:block">
            <div className="bg-white p-7">
                <p className="font-semibold">{contextValue.contentFields[0].contentFieldValue.data}</p>
                <div className="flow-root flex">
                    <p className="float-left w-6/12 lg:w-8/12 text-sm font-normal">{contextValue.contentFields[1].contentFieldValue.data}</p>
                    <p className="float-right pr-3">
                        <img className="w-full" alt="size guide" src={contextValue.contentFields[2].contentFieldValue.image.contentUrl} />
                    </p>
                </div>
            </div>
        </div>
        }
        </>
    )
}