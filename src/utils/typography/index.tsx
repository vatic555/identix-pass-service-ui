import styled from 'styled-components';
import {COLORS} from '../colors';

type TextProps = {
    fontWeight?: string;
    fontSize?: string;
    color?: string;
    margin?: string;
    marginLg?: string;
    textAlign?: string;
}

export const Title1 = styled.h1<TextProps>`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  background: -webkit-linear-gradient(-50deg, #FFFFFF 45%, #3ac6e7 130%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;

  @media(min-width: 1400px) {
    font-size: 28px;
  }
`;

export const Title2 = styled.h2<TextProps>`
  position: relative;
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  z-index: 99;

  @media(min-width: 1400px) {
    font-size: 36px;
    margin: ${(props) => (props.marginLg ? props.marginLg : props.margin ? props.margin : '0')};
  }
`;

export const Title3 = styled.h3<TextProps>`
  position: relative;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};
  z-index: 99;

  @media(min-width: 1400px) {
    font-size: 28px;
    margin: ${(props) => (props.marginLg ? props.marginLg : props.margin ? props.margin : '15px 0')};
  }
`;

export const Body1 = styled.p<TextProps>`
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};
  
  @media(min-width: 1400px) {
    font-size: 16px;
    margin: ${(props) => (props.marginLg ? props.marginLg : props.margin ? props.margin : '15px 0')};
  }
`;

export const Body2 = styled.p<TextProps>`
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 150%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};

  @media(min-width: 1400px) {
    font-size: 18px;
    margin: ${(props) => (props.marginLg ? props.marginLg : props.margin ? props.margin : '15px 0')};
  }
`;

export const Body3 = styled.p<TextProps>`
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};

  @media(min-width: 1400px) {
    font-size: 14px;
    margin: ${(props) => (props.marginLg ? props.marginLg : props.margin ? props.margin : '15px 0')};
  }
`;

export const Body4 = styled.p<TextProps>`
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};

  @media(min-width: 1400px) {
    font-size: 20px;
    margin: ${(props) => (props.marginLg ? props.marginLg : props.margin ? props.margin : '15px 0')};
  }
`;

export const Body5 = styled.p<TextProps>`
  font-size: 24px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '15px 0')};


  @media(min-width: 1400px) {
    font-size: 28px;
    margin: ${(props) => (props.marginLg ? props.marginLg : props.margin ? props.margin : '15px 0')};
  }
`;

export const Label1 = styled.p<TextProps>`
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '0')};

  @media(min-width: 1400px) {
    font-size: 13px;
    margin: ${(props) => (props.marginLg ? props.marginLg : props.margin ? props.margin : '0')};
  }
`;

export const Label2 = styled.p<TextProps>`
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  line-height: 140%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '0')};

  @media(min-width: 1400px) {
    font-size: 16px;
    margin: ${(props) => (props.marginLg ? props.marginLg : props.margin ? props.margin : '0')};
  }
`;

export const TextGradient = styled.p<TextProps>`
  display: inline;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  background: -webkit-linear-gradient(0, #8F5AE0 -10.04%, #37B9C6 116.12%);
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

