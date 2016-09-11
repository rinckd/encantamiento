using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2WebpackVisualStudio.Models;
using Angular2WebpackVisualStudio.ViewModels;
using AutoMapper;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;

namespace Angular2WebpackVisualStudio.Controllers
{

    //[Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private IQuickStartRepository _repository;
        private ILogger<ValuesController> _logger;

        public ValuesController(QuickstartContext context, 
            IQuickStartRepository repository,
            ILogger<ValuesController> logger)
        {
            _logger = logger;
            _repository = repository;
        }
        // GET: api/values
        [Authorize]
        [HttpGet("api/values")]
        public IActionResult Get()
        {
            try
            {
                var results = _repository.GetAllTrips();
                return Ok(Mapper.Map<IEnumerable<TripViewModel>>(results));
            }
            catch (Exception ex)
            {
                _logger.LogError("values are wrong.");
                // TODO Logging
            }
            return BadRequest("Error occurred");

            //var data = _repository.GetAllTrips();
            //return new JsonResult(data);
            //return new JsonResult(new string[] { "value1", "value2" });
        }

        // GET api/values/5
        [HttpGet("api/values/{id}")]
        public IActionResult Get(int id)
        {
            return new JsonResult("value");
        }

        // POST api/values
        [HttpPost("api/trips")]
        public async Task<IActionResult> Post([FromBody]TripViewModel theTrip)
        {
            if (ModelState.IsValid)
            {
                var newTrip = Mapper.Map<Trip>(theTrip);
                _repository.AddTrip(newTrip);
                if (await _repository.SaveChangesAsync())
                {
                    // return 201 and location of new uri
                    return Created($"api/trips/{theTrip.Name}", Mapper.Map<TripViewModel>(newTrip));
                }
                else
                {
                    return BadRequest("Failed to save changes");
                }
            }
            return BadRequest("bad data");
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]string value)
        {
            return new OkResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return new NoContentResult();
        }
    }
}
