import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
            Our pricing is flexible and based on your project's needs.<br/> We are <b>open to negotiation,</b> so feel free to reach out to discuss your budget and find a solution that works for both of us.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="@ Rs.7,999"
                title="Basic"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                         { name: "Project Abstracts", cheked: true },
                  { name: "Source Code", cheked: true },
                  { name: "Project Demos", cheked: true },
                  { name: "In-depth Explanation", cheked: true },
                  { name: "Review Assistance", cheked: false },
                  { name: "Reports", cheked: false },
                  { name: "PPT", cheked: false },
                  { name: "Research Paper", cheked: false },

          
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="@ Rs.9,999"
                title="Silver"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Project Abstracts", cheked: true },
                  { name: "Source Code", cheked: true },
                  { name: "Project Demos", cheked: true },
                  { name: "In-depth Explanation", cheked: true },
                  { name: "Review Assistance", cheked: true },
                  { name: "Reports", cheked: true },
                  { name: "PPT", cheked:false},
                  { name: "Research Paper", cheked: false },

               
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="@ Rs.12,499"
                title="Golden"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Project Abstracts", cheked: true },
                  { name: "Source Code", cheked: true },
                  { name: "Project Demos", cheked: true },
                  { name: "In-depth Explanation", cheked: true },
                  { name: "Review Assistance", cheked: true },
                  { name: "Reports", cheked: true },
                  { name: "PPT", cheked: true },
                  { name: "Research Paper", cheked: true },



                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




