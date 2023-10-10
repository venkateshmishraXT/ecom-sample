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
                <p className="font-semibold">{contextValue.measure.title}</p>
                <div className="flow-root flex">
                    <p className="float-left w-6/12 lg:w-8/12 text-sm font-normal">{contextValue.measure.desc}</p>
                    <p className="float-right pr-3">
                        <img className="w-full" alt="size guide" src={contextValue.measure.imagePath} />
                    </p>
                </div>
            </div>
        </div>
        }
        </>
    )
}