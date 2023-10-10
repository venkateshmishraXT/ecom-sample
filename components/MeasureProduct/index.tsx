/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from "react";
import API_BASE_URL from "@/config/api";

export default function MeasureProduct() {
    const [data, setData] = useState<any>();
    useEffect(() => {
        fetch(`${API_BASE_URL}/content`)
            .then(response => response.json())
            .then(json => {
                setData(json.data)
            }
            )
    }, [])
    return (
        <>       {data && <div className="xl:w-236 mt-8 hidden md:block">
            <div className="bg-white p-7">
                <p className="font-semibold">{data.measure.title}</p>
                <div className="flow-root flex">
                    <p className="float-left w-6/12 lg:w-8/12 text-sm font-normal">{data.measure.desc}</p>
                    <p className="float-right pr-3">
                        <img className="w-full" alt="size guide" src={data.measure.imagePath} />
                    </p>
                </div>
            </div>
        </div>
        }
        </>
    )
}