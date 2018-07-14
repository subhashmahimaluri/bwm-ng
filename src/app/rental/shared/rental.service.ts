import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()

export class RentalService {
    private rentals: Rental[] = [
        {
          id: "1",
          title: "East Bengalore",
          city: "Bengaluru",
          street: "Whitefield",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 3,
          description: "Very nice apartment",
          dailyRate: 24,
          shared: false,
          createdAt: "24/12/2015"
        },
        {
          id: "2",
          title: "Central Bengalore2",
          city: "Bengaluru",
          street: "Global Village",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 3,
          description: "Very nice apartment",
          dailyRate: 34,
          shared: false,
          createdAt: "24/12/2017"
        },
        {
          id: "3",
          title: "Central Hyderabad",
          city: "Hyderabad",
          street: "Hitech City",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 3,
          description: "Very nice apartment",
          dailyRate: 14,
          shared: false,
          createdAt: "24/02/2017"
        },
        {
          id: "4",
          title: "Central Chennai",
          city: "Chennai",
          street: "T Nagar",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 3,
          description: "Very nice apartment",
          dailyRate: 44,
          shared: false,
          createdAt: "24/12/2016"
        }
    ];

    public getRentalById(rentalId: string): Observable<Rental> {
      return new Observable<Rental>((observer) => {
        setTimeout(()=> {
          const foundRental = this.rentals.find((rental) => {
            return rental.id == rentalId;
          });
          observer.next(foundRental);
        }, 500);
      });
    }

    public getRentals(): Observable<Rental[]> {
      return new Observable<Rental[]>((observer) => {
        setTimeout(() => {
          observer.next(this.rentals);
        }, 1000);
      });
    }
}