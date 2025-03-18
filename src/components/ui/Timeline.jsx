import TimelineCard from './TimelineCard';

const Timeline = ({educationData}) => {
    return (
        <div className='w-full'>
            {educationData.map((education) => (
                <TimelineCard key={education.school} {...education} />
            ))}
        </div>
    )
}

export default Timeline;