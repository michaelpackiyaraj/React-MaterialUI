import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const Button = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default Button;