import { ArrowDownward } from '@mui/icons-material'
import React from 'react'
import Chart from '../../components/chart/Chart'
import { DefaultSpacerHorizontal, DefaultSpacerVertical } from '../../components/default_spacer/DefaultSpacer'
import FeaturedInfo from '../../components/featured_info/FeaturedInfo'
import LatestTransactions from './components/latest_transactions/LatestTransactions'
import NewMembers from './components/new_members/NewMembers'
import "./home.scss"

export default function Home() {
    const data = [
        {
            month: "Jan",
            users: 100,
        },
        {
            month: "Feb",
            users: 300,
        },
        {
            month: "Mar",
            users: 200,
        },
        {
            month: "Apr",
            users: 150,
        },
        {
            month: "May",
            users: 600,
        },
        {
            month: "Jun",
            users: 720,
        },
        {
            month: "July",
            users: 700,
        },
    ]

    return (
        <div className="home">
            <div className="featured-info-section">
                <FeaturedInfo title={"Revenue"} value={"$2050"} statistics={"-20"} ></FeaturedInfo>
                <FeaturedInfo title={"Sales"} value={"$3500"} statistics={"+25"}></FeaturedInfo>
                <FeaturedInfo title={"Cost"} value={"$2030"} statistics={"-15"}></FeaturedInfo>
            </div>
            <Chart dataKey={"month"} data={data} title={"User Analytics"}></Chart>
            <DefaultSpacerVertical></DefaultSpacerVertical>
            <div className="members-and-transactions">
                <NewMembers></NewMembers>
                <DefaultSpacerHorizontal></DefaultSpacerHorizontal>
                <LatestTransactions></LatestTransactions>
            </div>
            <DefaultSpacerVertical></DefaultSpacerVertical>
            <DefaultSpacerVertical></DefaultSpacerVertical>
            <DefaultSpacerVertical></DefaultSpacerVertical>
        </div>
    )
}
