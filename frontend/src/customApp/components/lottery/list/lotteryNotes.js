import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const Notes = styled.ul`
  background-color: #eee;
  padding: 10px 8px 8px;
  margin-bottom: 16px;
`;

const NotesTitle = styled.p`
  margin-left: auto;
  font-weight: bold;
`;

const KomeMark = styled.span`
  padding-right: 2px;
`;

const NoteText = styled.p`
  font-weight: bold;
`;

const noteStyle = {
  default: {
    display: "flex",
    fontSize: "12px"
  },
  flgStyle: {
    color: "red"
  }
};

const Note = ({ note, key }) => {
  let _noteStyle = { ...noteStyle.default };
  if (note.note_flg) {
    _noteStyle = { ..._noteStyle, ...noteStyle.flgStyle };
  }
  return (
    <li key={key} style={_noteStyle}>
      <KomeMark>
        <IntlMessages id="lottery.kome" />
      </KomeMark>
      <NoteText>{note.text}</NoteText>
    </li>
  );
};

const LotteryNotes = ({ notes }) => {
  return (
    <Notes>
      <NotesTitle>
        <IntlMessages id="lottery.notes" />
      </NotesTitle>
      {notes &&
        notes.map((note, index) => {
          return <Note note={note} key={index} />;
        })}
    </Notes>
  );
};

export default LotteryNotes;
