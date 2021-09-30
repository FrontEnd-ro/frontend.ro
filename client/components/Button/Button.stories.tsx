import { faShare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};
export const Default = () => (
  <>
    <Button variant="transparent"> Default </Button>
    <Button variant="transparent" className="mr-2" disabled> Disabled Default </Button>
    <Button variant="transparent" className="mr-2" loading> Loading Default </Button>
    <Button variant="transparent" className="mr-2" bouncy> Bouncy Default </Button>
    <Button variant="transparent" className="mr-2" withIcon icon={faShare}> Default with icon </Button>
    <Button variant="transparent" outline> Outline Default </Button>
  </>
);
export const Primary = () => (
  <>
    <Button variant="blue" className="mr-2"> Blue </Button>
    <Button variant="blue" className="mr-2" disabled> Disabled Blue </Button>
    <Button variant="blue" className="mr-2" loading> Loading Blue </Button>
    <Button variant="blue" className="mr-2" bouncy> Bouncy Blue </Button>
    <Button variant="blue" className="mr-2" withIcon icon={faShare}> Blue with icon </Button>
    <Button variant="blue" outline> Outline Blue </Button>
  </>
);

export const Light = () => (
  <>
    <Button variant="light" className="mr-2"> Light Button </Button>
    <Button variant="light" className="mr-2" disabled> Disabled Light Button </Button>
    <Button variant="light" className="mr-2" loading> Loading Light Button </Button>
    <Button variant="light" className="mr-2" bouncy> Bouncy Light Button </Button>
    <Button variant="light" className="mr-2" withIcon icon={faShare}> Light Button with icon </Button>
    <Button variant="light" outline> Outline Light Button </Button>
  </>
);

export const Success = () => (
  <>
    <Button variant="success" className="mr-2"> Success </Button>
    <Button variant="success" className="mr-2" disabled> Disabled Success </Button>
    <Button variant="success" className="mr-2" loading> Loading Success </Button>
    <Button variant="success" className="mr-2" bouncy> Bouncy Success </Button>
    <Button variant="success" className="mr-2" withIcon icon={faShare}> Success with icon </Button>
    <Button variant="success" outline> Outline Success </Button>
  </>
);

export const Danger = () => (
  <>
    <Button variant="danger" className="mr-2"> Danger </Button>
    <Button variant="danger" className="mr-2" disabled> Disabled Danger </Button>
    <Button variant="danger" className="mr-2" loading> Loading Danger </Button>
    <Button variant="danger" className="mr-2" bouncy> Bouncy Danger </Button>
    <Button variant="danger" className="mr-2" withIcon icon={faShare}> Danger with icon </Button>
    <Button variant="danger" outline> Outline Danger </Button>
  </>
);

export const Yellow = () => (
  <>
    <Button variant="yellow" className="mr-2"> Yellow </Button>
    <Button variant="yellow" className="mr-2" disabled> Disabled Yellow </Button>
    <Button variant="yellow" className="mr-2" loading> Loading Yellow </Button>
    <Button variant="yellow" className="mr-2" bouncy> Bouncy Yellow </Button>
    <Button variant="yellow" className="mr-2" withIcon icon={faShare}> Yellow with icon </Button>
    <Button variant="yellow" outline> Outline Yellow </Button>
  </>
);

export const Grey = () => (
  <>
    <Button variant="grey" className="mr-2"> Grey </Button>
    <Button variant="grey" className="mr-2" disabled> Disabled Grey </Button>
    <Button variant="grey" className="mr-2" loading> Loading Grey </Button>
    <Button variant="grey" className="mr-2" bouncy> Bouncy Grey </Button>
    <Button variant="grey" className="mr-2" withIcon icon={faShare}> Grey with icon </Button>
    <Button variant="grey" outline> Outline Grey </Button>
  </>
);

export const Link = () => (
  <>
    <Button variant="link" className="mr-2"> Link </Button>
    <Button variant="link" className="mr-2" disabled> Disabled Link </Button>
    <Button variant="link" className="mr-2" loading> Loading Link </Button>
    <Button variant="link" className="mr-2" bouncy> Bouncy Link </Button>
    <Button variant="link" className="mr-2" withIcon icon={faShare}> Link with icon </Button>
    <Button variant="link" outline> Outline Link </Button>
  </>
);
