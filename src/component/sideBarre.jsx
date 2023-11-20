import './SideBarre.scss'

function sideBarre ({whatYouWant, titreDuSite}) {
    return (
       <p className='sideStyle'>
            {whatYouWant}
        </p>
    );
}
export default sideBarre;