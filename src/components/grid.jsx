const styles = columns => {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 109px)`,
    columnGap: '20px',
    rowGap: '20px',
  };
};

export function Grid(props) {
  return <div style={styles(props.columns)}>{props.children}</div>;
}
