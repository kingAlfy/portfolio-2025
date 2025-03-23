import TimelineCard from './TimelineCard';

const Timeline = ({educationData}) => {
    return (
        <section className="flex gap-4 justify-center max-w-7xl">
            <div>
                {educationData.map((education) => (
                    <TimelineCard key={education.school} {...education} />
                ))}
            </div>
        </section>
    )
}

export default Timeline;