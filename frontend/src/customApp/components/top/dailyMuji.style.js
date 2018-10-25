import styled from "styled-components";

const DailyMujiWrapper = styled.div`

  width: 100%;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ddd;
  background: white;
  transition: filter 0.2s ease;

  &:hover {
    width: 100%;
    filter: brightness(0.95);
  }

  & > a {
    display: block;

    h2 {
      font-size: 22px;
      font-weight: bold;
      padding: 20px 0;
      margin: 0;
    }

    .dailymuji-item-group {
      flex-wrap: nowrap;

      .dailymuji-item {
        height: auto;
        width: 20%;

        img {
          width: 100%;
        }
      }
    }

    .dailymuji-frame-subtitle {
      font-size: 14px;
      font-weight: bold;
      color: #7f0019;
      padding: 15px 0;
    }
  }
`
export default DailyMujiWrapper;
