import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.inEdit = this.inEdit.bind(this);
    this.save = this.save.bind(this);
    // this.onSave = this.onSave.bind(this);
  }

  onDelete() {
    const { onDelete, name } = this.props;

    this.props.onDelete(name);
  }

  inEdit() {
    this.setState({
      edit: true
    });
  }

  save(event) {
    event.preventDefault();
    this.props.save(
      this.nameInput.value,
      this.priceInput.value,
      this.props.name
    );

    this.setState({ edit: false });
    // this.state.edit=false;
  }

  render() {
    const { name, price, onDelete } = this.props;

    return (
      <div>
        {this.state.edit ? (
          <form onSubmit={this.save}>
            <input
              placeholder="Name"
              ref={nameInput => (this.nameInput = nameInput)}
              defaultValue={name}
            />
            <input
              placeholder="Price"
              ref={priceInput => (this.priceInput = priceInput)}
              defaultValue={price}
            />
            <button>Save</button>
          </form>
        ) : (
          <div>
            <span>{name}</span>
            {` | `}
            <span>{price}</span>
            {` | `}
            <button onClick={this.inEdit}>Edit</button>
            {` | `}
            <button onClick={this.onDelete}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default ProductItem;
