using System.Collections.Generic;
using System.Threading.Tasks;

namespace Angular2WebpackVisualStudio.Models
{
    public interface IQuickStartRepository
    {
        IEnumerable<Trip> GetAllTrips();
        Trip GetTripByName(string tripName);
        void AddTrip(Trip trip);
        void AddStop(string tripName, Stop newStop);
        Task<bool> SaveChangesAsync();
    }
}