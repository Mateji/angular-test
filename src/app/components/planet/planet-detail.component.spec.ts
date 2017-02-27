import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PlanetDetailComponent } from "./planet-detail.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PlanetDetailComponent", () => {

  let fixture: ComponentFixture<PlanetDetailComponent>;
  let component: PlanetDetailComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PlanetDetailComponent]
    });

    fixture = TestBed.createComponent(PlanetDetailComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
