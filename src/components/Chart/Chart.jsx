import { div } from "framer-motion/client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Triangle shape function
const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
   Z`;

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    if (x == null || y == null || width == null || height == null) return null;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = ({ bookings }) => {
    // Convert your bookings array into recharts data format
    const data = bookings.map((b) => ({
        name: b.name,
        value: b.fee,
    }));

    const margin = { top: 20, right: 30, left: 20, bottom: 5 };

    return (
        <div className="w-[full] lg:w-[50%] mx-auto">
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data} margin={margin}>
                    <XAxis
                        dataKey="name"
                        angle={-35}       // rotate labels
                        textAnchor="end"  // align rotated text
                        interval={0}      // show all labels
                        height={90}       // extra space for rotated labels
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default Chart;
