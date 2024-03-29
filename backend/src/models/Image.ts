import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orpanhage';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: Number;
    @Column()
    path: string;
    @ManyToOne(() => Orphanage, orpanhage => orpanhage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;
}