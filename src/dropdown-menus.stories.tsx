import * as React from 'react';
import EnhancedInput, { TextBlock } from 'react-enhanced-input';
import {
  isPrice,
  isSize,
  isinCodes,
  isinPartialRegEx,
  isinRegEx,
  tickerRegEx,
  tickers,
} from './data';
import './styles.css';

export function DropdownMenus() {
  const [text, setText] = React.useState<string>('');
  const [textBlocks, setTextBlocks] = React.useState<TextBlock[]>([]);

  React.useEffect(() => {
    handleChange(`Type XS1 at the end of the line `, 0, true);
  }, []);

  const handleChange = (
    newText: string,
    position: number,
    updateTokens?: boolean,
  ) => {
    const start =
      newText
        .trimEnd()
        .lastIndexOf(' ', newText[position] === ' ' ? position - 1 : position) +
      1;
    const tokens = newText.substring(start).split(/ |\n|\r|\t/);
    const tempBlocks = textBlocks.filter(
      (b) =>
        (!updateTokens && b.id !== 'bad-edit') ||
        (b.start + b.length < start && b.id !== 'bad-edit'),
    );
    const style = 'margin-right: 2px;';
    let pos = start;
    tokens.forEach((token) => {
      if (token.match(isinRegEx)) {
        if (updateTokens) {
          if (isinCodes.includes(token.toUpperCase())) {
            tempBlocks.push({
              id: `isin${pos}`,
              start: pos,
              length: token.length,
              style,
            });
          }
        }
      } else if (tickers.includes(token)) {
        if (updateTokens) {
          tempBlocks.push({
            id: `ticker${pos}`,
            start: pos,
            length: token.length,
            style,
          });
        }
      } else if (isSize(token)) {
        if (updateTokens) {
          tempBlocks.push({
            id: `vol${pos}`,
            start: pos,
            length: token.length,
            style,
          });
        }
      } else if (isPrice(token)) {
        if (updateTokens) {
          tempBlocks.push({
            id: `prc${pos}`,
            start: pos,
            length: token.length,
            style,
          });
        }
      } else if (
        position >= pos &&
        position <= pos + token.trimEnd().length &&
        token[position] !== ''
      ) {
        if (token.match(isinPartialRegEx)) {
          const matchedIsins = isinCodes.filter((code) => code.includes(token));
          if (matchedIsins.length > 0) {
            tempBlocks.push({
              id: 'bad-edit',
              start: pos,
              length: token.length,
              style: 'font-style: italic;font-weight: bold;',
              dropDown: {
                activation: 'cursorposition',
                options: matchedIsins.slice(0, 5),
              },
            });
          }
        } else if (token.match(tickerRegEx)) {
          const matchedTickers = tickers.filter((code) => code.includes(token));
          if (matchedTickers.length > 0) {
            tempBlocks.push({
              id: 'bad-edit',
              start: pos,
              length: token.length,
              style: 'font-style: italic;font-weight: bold;',
              dropDown: {
                activation: 'cursorposition',
                options: matchedTickers.slice(0, 5),
              },
            });
          }
        }
      }
      pos = pos + token.length + 1;
    });

    if (JSON.stringify(tempBlocks) !== JSON.stringify(textBlocks)) {
      setTextBlocks(tempBlocks);
    }
    if (updateTokens) {
      setText(newText);
    }
  };

  const handleOptionSelection = (blockId: string, option: string) => {
    const editBlock = textBlocks.find((b) => b.id === blockId);
    if (editBlock) {
      const newText =
        text.substring(0, editBlock.start) +
        option +
        text.substring(editBlock.start + editBlock.length);
      handleChange(newText, editBlock.start, true);
    }
  };

  return (
    <div className="storyStyle">
      <h1>Enhanced Input With DropDown Menus</h1>
      <div className="text">
        Dropdown lists can be assoicated against a TextBlock. They will always
        appear just below the block. They can be activiated either by -<br />
        <ul>
          <li>
            <b>cursorposition:</b> when the cursor is within the TextBlock
          </li>
          <li>
            <b>mouseover:</b> when the mouse is over the TextBlock
          </li>
        </ul>
        The below example is activated by the position of the cursor.
      </div>
      <pre>
        {`
TextBlock
{
  id: 'bad-edit',
  start: pos,
  length: token.length,
  style: 'font-style: italic;font-weight: bold;',
  dropDown: {
    activation: 'cursorposition',
    options: ['item1', 'item2', 'item3'],
  }
}`}
      </pre>
      <div style={{ height: '300px', width: '600px', position: 'relative' }}>
        <EnhancedInput
          style={{
            fontFamily:
              'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
          }}
          lineHeight="40px"
          text={text}
          textBlocks={textBlocks}
          onChange={(newText, position) =>
            handleChange(newText, position, true)
          }
          onCursorPositionChanged={(newText, position) =>
            handleChange(newText, position)
          }
          onDropDownItemSelected={(blockId, option) =>
            handleOptionSelection(blockId, option)
          }
        />
      </div>
    </div>
  );
}
