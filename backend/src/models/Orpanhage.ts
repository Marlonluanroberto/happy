import { Entity, Column, PrimaryGeneratedColumn , OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';


@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: Number;
    @Column()
    name: string;
    @Column()
    latitude: string;
    @Column()
    longitude: string;
    @Column()
    about: string;
    @Column()
    instructions: string;
    @Column()
    opening_hours: string;
    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id'})
    images: Image[];
}