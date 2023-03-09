import styled from "styled-components";

export const StyledPairsCard = styled.section`
  max-width: 928px;
  width: 100%;
  background: #202636;
  border-radius: 5px;
  /* margin: 0 auto; */
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  font-family: "Open Sans";
  font-style: normal;

  .profileDetails {
    max-width: 137px;
    width: 100%;
    padding: 1rem 0.5rem;
    div {
      margin: 0 auto;
      width: 100%;
    }
    .icons {
      max-width: 100px;
      margin: 0.5rem auto;
      img {
        margin-right: 5px;
      }
    }

    .timeListing {
      background: #2d354b;
      border-radius: 3px;
      font-weight: 700;
      font-size: 8px;
      text-align: center;
      letter-spacing: 0.05em;
      color: #ffffff;

      margin: 0 auto;

      padding: 1rem 0.5rem;
      .time {
        font-weight: 300;
        font-size: 20px;
      }
      p {
        margin: 0;
      }
    }
  }
  .details {
    margin-left: 0.5rem;
    width: 100%;
    padding: 1rem;
    p {
      margin: 0;
    }
    .userDetail {
      .name {
        font-weight: 600;
        font-size: 25.0774px;
        line-height: 34px;
        margin-right: 0.5rem;
        color: #ffffff;
      }
      .profitEarned {
        font-weight: 300;
        font-size: 25.0774px;
        line-height: 34px;
        margin-right: 0.5rem;
        color: #85de50;
      }
      .timeDropdown {
        width: 51px;
        height: 19px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        font-family: "Open Sans";
        font-weight: 700;
        font-size: 8px;
        color: #ffffff;
      }
    }

    .subTitle {
      font-weight: 300;
      font-size: 22.3547px;
      color: #ffffff;
    }

    .userStats {
      font-weight: 400;
      font-size: 8px;
      line-height: 11px;
      /* identical to box height */

      letter-spacing: 0.05em;

      color: #ffffff;

      ul {
        list-style: none;
        border: 0.25px solid rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        max-width: 440px;
        width: 100%;
        padding: 0;

        li {
          padding: 0.25rem 0;
          border: 0.25px solid rgba(255, 255, 255, 0.2);
          margin: 0;
          width: 100%;
          text-align: center;
        }
      }
    }

    .wallet {
      p {
        font-weight: 700;
        font-size: 11px;
        margin-right: 0.5rem;
        color: #8a8fcb;
      }
    }

    .featureContainer {
      .greenIndicator {
        height: 7px;
        width: 7px;
        background: #85de50;
        border-radius: 50%;
        margin-right: 5px;
      }
      .warningIndicator {
        height: 7px;
        width: 7px;
        background: #f48319;
        border-radius: 50%;
        margin-right: 5px;
      }
      p {
        margin: 0;
        font-weight: 400;
        font-size: 12px;
      }
      .featureItem {
        width: 165px;
      }
    }
    .buttons {
      margin-top: 0.5rem;
      gap: 1rem;
    }
  }
  .rating {
    justify-content: space-between;
    flex-direction: column;
    padding-right: 1rem;
    .pentagon {
      width: 56px;
      height: 65px;
      clip-path: polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%);
      transform: rotate(180deg);
      position: relative;
      .ratingText {
        transform: rotate(180deg);
        margin: 0 auto;
        position: absolute;
        top: 10px;
        width: 100%;
        text-align: center;
      }
    }
    .findBtn {
      width: 52px;
      height: 52px;
      border: 1px solid #ffffff;
      border-radius: 50%;
      justify-content: center;
      position: relative;
      top: -20px;
    }
  }
`;
