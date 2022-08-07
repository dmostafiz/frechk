import React from 'react'
import OrganizationChart from "@dabeng/react-orgchart";
import OrgNode from "./OrgNode";
import 'regenerator-runtime/runtime'
export default function Geneology({ dataSource }) {

    console.log('Geneology Nodes: ', dataSource)

    return (

        <>
            <OrganizationChart
                // height="100vh"
                datasource={dataSource}
                chartClass="myChart"
                width='100vw'
                // NodeTemplate={OrgNode}
                // pan={true}
            />
        </>

    )
}
