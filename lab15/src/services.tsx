interface Service {
id: number;
name: string;
description: string;
}
const services: Service[] = [
{ id: 1, name: "Web Development", description: "Modern responsive websites." },
{ id: 2, name: "App Development", description: "Android & iOS applications." },
{ id: 3, name: "UI/UX Design", description: "Beautiful user experiences." }
];
function Services(){
return (
<div className="page">
<h1>Our Services</h1>
<img src="https://www.sparkleminds.com/wp-content/uploads/2025/09/image-21.jpg" alt="services" />
<ul>
{services.map(service => (
<li key={service.id}>
<strong>{service.name}</strong>: {service.description}
</li>
))}
</ul>
</div>
);
};
export default Services;