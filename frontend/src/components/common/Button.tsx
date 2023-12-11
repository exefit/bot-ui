import { DefaultButton, IButtonProps, IButtonStyles, ICommandBarStyles } from "@fluentui/react";

interface HistoryButtonProps extends IButtonProps {
    onClick: () => void;
    text: string;
  }

export const HistoryButton: React.FC<HistoryButtonProps> = ({onClick, text}) => {
    const historyButtonStyles: ICommandBarStyles & IButtonStyles = {
        root: {
            color: '#fff',
            width: '180px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,.15)',
            textTransform: 'uppercase',
            height: '38px',
            border: 'none',
            marginRight: '20px'
          },
        rootHovered: {
            color: '#fff',
            background: 'rgba(255,255,255,.25)',
            border: 'none'
          }
      };

      return (
        <DefaultButton
            text={text}
            iconProps={{ iconName: 'History' }}
            onClick={onClick}
            styles={historyButtonStyles}
        />
      )
}