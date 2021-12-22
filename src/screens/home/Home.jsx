import { ArrowDownward } from '@mui/icons-material'
import React from 'react'
import { DefaultSpacerHorizontal } from '../../components/default_spacer/DefaultSpacer'
import FeaturedInfo from '../../components/featured_info/FeaturedInfo'
import "./home.scss"

export default function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div className="featured-info-section">
                    <FeaturedInfo title={"Revenue"} value={"$2050"} statistics={"-20"}></FeaturedInfo>
                    <FeaturedInfo title={"Sales"} value={"$3500"} statistics={"+25"}></FeaturedInfo>
                    <FeaturedInfo title={"Cost"} value={"$2030"} statistics={"-15"}></FeaturedInfo>
                </div>
            </div>
        </div>
    )
}
