import Button from "../Button/Button";

const UserAction = ({ login }) => {
  if (!login)
    return (
      <div className=''>
        <Button type={"link"} dest={"auth"} fontSize={"1em"}>
          Login or Register
        </Button>
      </div>
    );
};

export default UserAction;
