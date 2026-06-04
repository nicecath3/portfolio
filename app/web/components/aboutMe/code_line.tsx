interface propsType {
  number: number;
  indent: number;
  children: React.ReactNode;
}

export const CodeLine = (props: propsType) => {
  const { number, indent, children } = props;

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <span
        style={{
          color: 'var(--text-muted)',
          userSelect: 'none',
          minWidth: '20px',
          textAlign: 'right',
        }}
      >
        {number}
      </span>
      <span style={{ paddingLeft: `${indent * 16}px` }}>{children}</span>
    </div>
  );
};
