import { Link } from "react-router-dom";
import styled from "styled-components";

export const Grid = ({ header, children, setPageNumber, pageNumber, hide }) => {
  const showPrevLink = 1 < pageNumber;

  const handlePaginationPrev = () => {
    setPageNumber(pageNumber - 1);
  };
  const handlePaginationNext = () => {
    setPageNumber(++pageNumber);
  };

  return (
    <Wrapper>
      <div className="pagination">
        <h1>{header}</h1>
        {hide ? (
          <div className="pagination__items">
            <div>
              {showPrevLink ? (
                <Link
                  onClick={handlePaginationPrev}
                  className="pagination__item">
                  Prev
                </Link>
              ) : null}
            </div>
            <div>
              <Link onClick={handlePaginationNext} className="pagination__item">
                Next
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: red;
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

  .pagination {
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;

    .pagination__items {
      display: flex;
      justify-content: center;
      align-items: center;

      .pagination__item {
        color: #fff;
        margin: 0 10px;
        border: 1px solid white;
        text-decoration: none;
        padding: 5px;
        font-weight: bold;

        :hover {
          background: #057180;
          font-weight: bold;
        }
      }
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
