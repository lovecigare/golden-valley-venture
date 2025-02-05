import styled from "styled-components";
import ChatBrowser from "../../assets/webroot/img/index/chart_browser_scaled.png";
import Clients from "../../assets/webroot/img/index/Clients.png";
import Gloval from "../../assets/webroot/img/index/Group.png";
import LinerChat from "../../assets/webroot/img/index/liner_chat.png";
import Rectangle from "../../assets/webroot/img/index/rectangle.png";
import { colors } from "../../core/constants/styleguide.const";
import { ButtonPrimarySmall } from "../styleguide/styleguide";

const GVVIndex = () => {
  return (
    <>
      <GVVIndexContainer>
        <LeftPart>
          <SummaryPart>
            <p>{`$GVV tokens is an investment system that integrates multiple liquidity pools of investors into A SINGLE BUSINESS CAPITAL INFRASTRUCTURE. $GVV is banking on the rapidly growing blockchain technology to create a business that invests in emerging tech startups and gives longlasting returns to liquidity providers in proportion to their shares . The $GVV TOKEN COMPRISES DEVELOPERS , TECHNOLOGY EXPERTS , FINANCIAL EXPERTS AND BRANDS WHO ARE AT THE FOREFRONT OF MAKING SURE INVESTOR’S LIQUIDITY POOLS ARE PROPERLY MANAGED TO GIVE HIGH RETURNS OVER AN EXTENSIVE PERIOD OF TIME. BUILT ON THE POLYGON NETWORK , SECURED WITH HIGH END PROTOCOLS AND TAILORED FOR CUSTOM HANDS-OFF INVESTOR MANAGEMENT , $GVV AIMS TO BUILD A SUSTAINABLE AND PROFITABLE VENTURE THAT CUTS ACROSS GENERATIONS AND TIMELINES.`}</p>
          </SummaryPart>
          <img src={Rectangle} alt=""></img>
        </LeftPart>
        <RightPart>
          <StyledGlobalImage src={Gloval}></StyledGlobalImage>
          <img src={ChatBrowser} alt="" style={{ zIndex: 1 }}></img>
          <img src={LinerChat} alt="" style={{ zIndex: 1 }}></img>
          <StyledButtonsPart>
            <BuyGVVButton>{`Buy $GVV`}</BuyGVVButton>
            <ReadWhitePaperButton>{`Read White Paper`}</ReadWhitePaperButton>
          </StyledButtonsPart>
        </RightPart>
      </GVVIndexContainer>
      <ClientsPart>
        <img src={Clients} alt=""></img>
      </ClientsPart>
    </>
  );
};

const GVVIndexContainer = styled.div`
  margin-top: 50px;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 150px;
  background-color: ${colors.mainColor};
  justify-content: center;
  align-items: center;
  padding: 48px 0px 42px 0px;
`;

const ClientsPart = styled.div`
  margin-top: 100px;
  align-items: center;
  width: 100%;
  display: flex;
  background-color: ${colors.mainColor};
  justify-content: center;
  align-items: center;
  padding: 48px 0px 42px 0px;
`;
const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightPart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledGlobalImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%;
  height: 130%;
  opacity: 0.2;
`;

const SummaryPart = styled.div`
  width: 554px;
  font-family: Azeret Mono;
  font-style: italic;
  font-size: 13px;
  line-height: 29px;
  color: ${colors.neutrals8};
`;

const StyledButtonsPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BuyGVVButton = styled(ButtonPrimarySmall)`
  border-width: 0px;
  border-radius: 0px;
  font-style: italic;
  color: ${colors.mainColor};
`;

const ReadWhitePaperButton = styled(ButtonPrimarySmall)`
  border: solid 1px ${colors.neutrals8};
  border-radius: 0px;
  background-color: ${colors.mainColor};
`;

export default GVVIndex;
