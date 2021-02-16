const ViolationSidebar = () => {
  return <div>hi</div>;
};

export default ViolationSidebar;

// {violations && violations.length > 0 ? (
//     <>
//       <Paragraph>
//         There are <b>{violations.length}</b> issues in your content.
//       </Paragraph>
//       <List style={{ marginTop: "12px" }}>
//         {violations.map((v) => {
//           return (
//             <ListItem key={v.id}>
//               <Paragraph>{`${v.name} - ${v.fix}`}</Paragraph>
//             </ListItem>
//           );
//         })}
//       </List>
//     </>
//   ) : (
//     <Paragraph>Your content looks great! 🎉</Paragraph>
//   )}
