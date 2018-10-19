import styled from "styled-components";

const HeaderWrapper = styled.div`
  .ant-layout-header {
    background: #fff;
    border-bottom: solid 1px #f9f9f9;
    height: 10rem;
  }

  #banner {
    text-align: center;
    b {
      padding-left: 1rem;
    }
  }
  #logo-search-icons {
    #search {
      padding: 0 2rem 0 2rem;
    }
    img, form {
      display: inline;
    }
  }
`
export default HeaderWrapper;
