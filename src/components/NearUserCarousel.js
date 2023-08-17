import { useSelector } from 'react-redux';
import Profile from './Profile'

function NearUserCarousel() {
    let nearUserList = useSelector((state)=>state.nearUserList);
    return (
        <Carousel>
        {nearUserList.map((user) => {
          return (
            <>
              <Profile user={user} />
            </>
          );
        })}
      </Carousel>

    )
}