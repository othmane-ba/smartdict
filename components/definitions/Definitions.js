import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.span`
  font-size: 4vw;
  font-family: 'Montserrat', sans-serif;
`;
const Meanings = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: thin;
  height: 55vh;
  border: 10px solid rgb(105, 105, 105, 105);
  border-radius: 10px;
  padding: 10px 20px;
  overflow-x: hidden;
`;
const SingleMean = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 0;
`;
const Definitions = ({ word, category, meanings, LightMode }) => {
  return (
    <Meanings>
      {meanings[0] && word && category === 'en' && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: 'white', borderRadius: 10, width: '100%' }}
          controls
        >
          Your audio doesn&apost support audio elements.
        </audio>
      )}
      {word === '' ? (
        <SubTitle>Start by typing a word in Search</SubTitle>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def,index) => (
              <SingleMean key={index}
                style={{
                  backgroundColor: LightMode ? '#3b5360' : 'white',
                  color: LightMode ? 'white' : 'black',
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: 'white', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>Example : </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </SingleMean>
            ))
          )
        )
      )}
    </Meanings>
  );
};

export default Definitions;
