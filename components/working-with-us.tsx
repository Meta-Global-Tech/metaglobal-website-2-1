"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";

export const WorkingWithUs = () => {
  return (
    <>
      <div className="inline-block max-w-xlg text-center justify-center">
        <h1 className={subtitle({ class: "mt-2" })}>Working with us is easy</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Card>
          <CardBody>
            <p>Connect with us (quick meeting)</p>
          </CardBody>
        </Card>
        <p className="bold">→</p>
        <Card>
          <CardBody>
            <p>Roadmapping (Planning)</p>
          </CardBody>
        </Card>
        <p className="bold">→</p>
        <Card>
          <CardBody>
            <p>
              Engagement/Sprints delivering incremental value in each sprint.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
