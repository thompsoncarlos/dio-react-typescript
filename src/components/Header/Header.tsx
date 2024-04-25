import './Header.css';

export const Header = ({ title }: any) => {
    return (
        <div className='header'>
            <div className='title'>
                {title}
            </div>
        </div>
    )
}