import React from 'react'
import "./featured_info.scss"

import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import { DefaultSpacerHorizontal } from '../default_spacer/DefaultSpacer'

export default function FeaturedInfo({ title, value, statistics }) {


    const Indicator = statistics[0] == "+" ? ArrowUpward : ArrowDownward
    const indicatorClassName = statistics[0] == "+" ? "indicator-icon-increase" : "indicator-icon-decrease"
    return (
        <div className="featured-info">
            <h3 className="featured-info-title">{title}</h3>
            <div className="featured-info-details">
                <h1 className="info">{value}</h1>
                <DefaultSpacerHorizontal></DefaultSpacerHorizontal>
                <div className="statistics">
                    <span className="text">{statistics}</span>
                    <Indicator className={indicatorClassName}></Indicator>
                </div>
            </div>
            <span className="featured-info-subtitle">Compared to last month</span>
        </div>
    )
}
