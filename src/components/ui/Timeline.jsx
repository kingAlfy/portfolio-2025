import TimelineCard from './TimelineCard';

const Timeline = ({educationData}) => {
    return (
        <section className="flex gap-4 justify-center">
            <div>
                {educationData.map((education) => (
                    <TimelineCard key={education.school} {...education} />
                ))}
            </div>
        </section>
    )
}

export default Timeline;